// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract BasicMath {

    function adder(uint _a, uint _b)
        external
        pure
        returns (uint256, bool)
    {
        if(_a > type(uint256).max - _b) {
            return (0, true);
        }

        uint sum = _a + _b;

        return (sum, false);
    }

    function subtractor(uint _a, uint _b)
        external
        pure
        returns (uint256, bool)
    {
        if(_b > _a) {
            return (0, true);
        }

        uint difference = _a - _b;

        return (difference, false);
    }
}
