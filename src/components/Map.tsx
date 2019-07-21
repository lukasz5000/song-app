import * as React from 'react';
import {connect} from 'react-redux';

import {CoordinatesElement, CoordinatesList, DrawCallback} from "../models";
import {CSSProperties} from "react";
import {MapService} from "../services/MapService";
import {saveCoordinates} from "../actions/actions";
import {AppState} from "../reducers/rootReducer";

type DispatchProps = {
    saveCoordinates: typeof saveCoordinates,
}

type StateProps = {
    coordinates: CoordinatesList;
    newCoordinates: CoordinatesList;
};

type ElementProps = {
    style?: CSSProperties;
}

type Props = StateProps & DispatchProps & ElementProps;

export class MapComponent extends React.Component<Props> {
    private mapId: string = 'map';
    private mapService: MapService;

    constructor(props: Props) {
        super(props);
        this.mapService = new MapService(this.mapId);
    }

    componentDidMount() {
        const drawCallback: DrawCallback = (coordinates: CoordinatesElement) =>
            this.props.saveCoordinates(coordinates);

        this.mapService.init(this.props.coordinates, drawCallback);
    }

    componentWillReceiveProps(props: Props) {
        this.mapService.addNewElements(props.newCoordinates);
    }

    render() {
        return (
            <div style={this.props.style}
                 id={this.mapId}
            />
        );
    }
}

function mapStateToProps(state: Partial<AppState>) {
    const appState = state as AppState;
    return {
        coordinates: appState.coordinates.coordinates,
        newCoordinates: appState.coordinates.newCoordinates,
    };
}

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        saveCoordinates: (coordinates: CoordinatesElement) => dispatch(saveCoordinates(coordinates))
    }
}

export const Map = connect<StateProps, DispatchProps, ElementProps>(mapStateToProps, mapDispatchToProps)(MapComponent);