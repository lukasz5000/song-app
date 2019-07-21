import * as React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {CoordinatesList} from "../models";
import {CSSProperties} from "react";
import {AppState} from "../reducers/rootReducer";
import {connect} from "react-redux";

type StateProps = {
    coordinates: CoordinatesList;
};

type ElementProps = {
    style?: CSSProperties;
};

type Props = StateProps & ElementProps;

const columnDefs = [{
    headerName: 'Longitude', field: 'longitude'
}, {
    headerName: 'Latitude', field: 'latitude'
}];

export const TableComponent: React.FC<Props> = (props: Props) => (
    <div style={props.style}
         className="ag-theme-balham">
        <AgGridReact
            columnDefs={columnDefs}
            rowData={props.coordinates}>
        </AgGridReact>
    </div>
);

function mapStateToProps(state: Partial<AppState>) {
    const appState = state as AppState;
    return {
        coordinates: appState.coordinates.coordinates,
    };
}

export const Table = connect<StateProps, any, ElementProps>(mapStateToProps)(TableComponent);
