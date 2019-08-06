import * as React from 'react';

type Props = {
  songs: string[];
};

export const SongsElementComponent: React.FC<Props> = (props: Props) => (
    <ul>
        {props.songs.map((e: string, index: number) => {
            return <li key={`${index}-${e}`}>{e}</li>
        })}
    </ul>
);

export const SongsElement = SongsElementComponent;