import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconName} from '@fortawesome/fontawesome-common-types';

export type Props = {
    isOpen: boolean;
    onClick: () => void;
    isSquare?: boolean;
};

export const ToggleIconComponent: React.FC<Props> = (props: Props) => {
    const minusIconName: IconName = props.isSquare ? 'minus-square' : 'minus-circle';
    const plusIconName: IconName = props.isSquare ? 'plus-square' : 'plus-circle';
    let icon;
    if (props.isOpen) {
            icon = <FontAwesomeIcon
                className="text-danger d-inline-block"
                icon={['fas', minusIconName]}
            />;
    } else {
        icon = <FontAwesomeIcon
            className="text-success d-inline-block"
            icon={['fas', plusIconName]}
        />;
    }

    return <span onClick={props.onClick}>{icon}</span>;

};

ToggleIconComponent.defaultProps = {
    isSquare: false,
};

export const ToggleIcon = ToggleIconComponent;