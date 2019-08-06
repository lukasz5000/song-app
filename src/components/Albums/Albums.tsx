import * as React from 'react';
import {AppState} from "../../reducers/rootReducer";
import {connect} from "react-redux";
import {Album, Collapsable} from "../../models";
import {getAlbumsSelector, isAllAlbumsCloseSelector} from "../../selectors/selectors";
import {AlbumElement} from "../AlbumElement/AlbumElement";
import {ToggleIcon} from "../ToggleIcon/ToggleIcon";
import {toggleAlbums} from "../../actions/actions";

export type StateProps = {
    albums: Collapsable<Album>[];
    isAllAlbumsClose: boolean;
};

type DispatchProps = {
    toggleAlbumsFn: () => void;
};

export type Props = StateProps & DispatchProps;

export const AlbumsComponent: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <div className="pb-3">
                <strong className="pr-1">Albums:</strong>
                <ToggleIcon onClick={props.toggleAlbumsFn}
                            isSquare
                            isOpen={!props.isAllAlbumsClose}></ToggleIcon>
            </div>
            {props.albums.map((e: Collapsable<Album>) => (<AlbumElement key={e.id} id={e.id}/>))}
        </div>
    );
};

export function mapStateToProps(state: Partial<AppState>): StateProps {
    return {
        albums: getAlbumsSelector(state as AppState),
        isAllAlbumsClose: isAllAlbumsCloseSelector(state as AppState)
    };
}

const mapDispatchToProps = {
    toggleAlbumsFn: toggleAlbums,
}

export const Albums = connect<StateProps, any, any>
(mapStateToProps, mapDispatchToProps)(AlbumsComponent);
