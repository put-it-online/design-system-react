import React from 'react';
import { Image as BaseImage } from "design-system-base";

const Elm = BaseImage('img');

export const Image = (props) => {
    return <Elm style={{objectFit: 'cover'}} {...props} />
}