import React from 'react';
import {connect} from 'react-redux';

import {Map} from './Map';
import Container from '@material-ui/core/Container';
import {Table} from "./Table";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {MAP_HEIGHT_IN_PX} from "../Config";
import {AppState} from "../reducers/rootReducer";

type Props = {
    visible: boolean;
}

const AppComponent: React.FC<Props> = (props: Props) => {
    if (props.visible) {
        return (<Container>
            <Grid container>
                <Grid item xs={8}>
                    <Paper>
                        <Map style={{
                            height: MAP_HEIGHT_IN_PX,
                        }} />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Table style={{
                            height: MAP_HEIGHT_IN_PX,
                        }} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>);
    }

    return null;
};

const mapStateToProps = (state: AppState): Props => ({
    visible: state.coordinates.coordinates.length > 0,
});

export const App = connect(mapStateToProps)(AppComponent);
