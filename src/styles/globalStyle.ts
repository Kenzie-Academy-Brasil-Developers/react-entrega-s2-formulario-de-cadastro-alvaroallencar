import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {

    /* Primary palette: */

    --color-primary: 30, 144, 255;
    --color-primary-focus: 65, 105, 225;
    --color-primary-negative: 100, 149, 237;

    /* Grey scale palette: */

    --color-grey-4: 18, 18, 20;
    --color-grey-3: 33, 37, 41;
    --color-grey-2: 52, 59, 65;
    --color-grey-1: 134, 142, 150;
    --color-grey-0: 248, 249, 250;
    --color-white: 255, 255, 255;

    /* Feeback pallete: */

    --color-success-green: 63, 232, 100; 
    --color-negative-pink: 232, 63, 91; 

    --font-base: 'Roboto', sans-serif;;

    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, textarea, input, select {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: var(--font-base);
        vertical-align: baseline;
        box-sizing: border-box;
        text-decoration: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        /* line-height: 1;
        overflow-y: scroll; */
        overflow-x: hidden;
        background-color: rgba(var(--color-grey-4));

    }

    .root {
        background-color: rgba(var(--color-grey-2), 1);
    }


    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: rgba(var(--color-grey-2), 1);
        border-radius: 10px;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, 
    blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* * {
        outline: 1px solid red;
    } */
`;

export default GlobalStyle;
