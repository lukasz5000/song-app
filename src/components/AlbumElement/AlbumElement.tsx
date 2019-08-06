import * as React from 'react';
import {connect} from "react-redux";
import {Album, Collapsable} from "../../models";
import {AppState} from "../../reducers/rootReducer";
import {getAlbumSelector} from "../../selectors/selectors";
import {SongsElement} from "./components/SongsElement/SongsElement";
import {Collapse} from "reactstrap";
import {ToggleIcon} from "../ToggleIcon/ToggleIcon";
import {toggleAlbum} from "../../actions/actions";

export type StateProps = {
    album: Collapsable<Album>;
};

export type DispatchProps = {
    toggleAlbumFn: (id: number) => void
}

export type OwnProps = {
    id: number;
}

export type Props = StateProps & DispatchProps & OwnProps;

export const AlbumElementComponent: React.FC<Props> = (props: Props) => {
    const album: Collapsable<Album> = props.album;
    const toggleAlbumCallback = () => {
        props.toggleAlbumFn(props.album.id);
    };

    return (
       <div>
           <div>
               <div>
                   <strong>{album.name}</strong> - <span className="pr-1">{album.band}</span>
                   <ToggleIcon onClick={toggleAlbumCallback}
                               isOpen={album.isOpen} />
               </div>
           </div>
           <Collapse isOpen={album.isOpen}>
               <SongsElement songs={album.songs} />
           </Collapse>

       </div>
   );
}

export function mapStateToProps(state: Partial<AppState>, ownProps: OwnProps): StateProps {
    return {
        album: getAlbumSelector(state as AppState, ownProps.id),
    };
}

export const mapDispatchToProps = {
    toggleAlbumFn: toggleAlbum,
}

export const AlbumElement = connect <StateProps, DispatchProps, OwnProps>
(mapStateToProps, mapDispatchToProps)(AlbumElementComponent);
