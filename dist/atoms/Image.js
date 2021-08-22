"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_base_1 = require("design-system-base");
const Elm = design_system_base_1.Image('img');
const Image = (props) => {
    return jsx_runtime_1.jsx(Elm, Object.assign({ style: { objectFit: 'cover' } }, props), void 0);
};
exports.Image = Image;
