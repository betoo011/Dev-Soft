import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Label = styled.label`
${props => props.valido === 'false' && css`
color: red;
`}
`;

const LeyendaError = styled.p`
${props => props.valido === 'true' && css`
display: none;
`}
${props => props.valido === 'false' && css`
display: block;
`}

`;

const IconoValidacion = styled(FontAwesomeIcon)`
${props => props.valido === 'false' && css`
opacity:1;
color: red;
`}
${props => props.valido === 'true' && css`
opacity:1;
color: green;
`}
`;

export { Label, LeyendaError, IconoValidacion };