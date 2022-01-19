import { memo } from 'react';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
const Board = memo(function Container() {
    return (<div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name="Test 1" />
            <Box name="Test 2" />
            <Box name="Test 3" />
        </div>
    </div>);
});

export default Board