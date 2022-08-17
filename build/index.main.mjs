// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  
  
  const v85 = stdlib.protect(ctc0, interact.payment, 'for Alice\'s interact field payment');
  
  const txn1 = await (ctc.sendrecv({
    args: [v85],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:16:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v85, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v89], secs: v91, time: v90, didSend: v29, from: v88 } = txn1;
      
      sim_r.txns.push({
        amt: v89,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v89], secs: v91, time: v90, didSend: v29, from: v88 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v96, time: v95, didSend: v33, from: v94 } = txn2;
  ;
  let v97 = false;
  let v98 = v95;
  
  while (await (async () => {
    const v108 = v97 ? false : true;
    
    return v108;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v113], secs: v115, time: v114, didSend: v49, from: v112 } = txn3;
    ;
    const v116 = stdlib.addressEq(v94, v112);
    stdlib.assert(v116, {
      at: './index.rsh:27:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v119 = stdlib.protect(ctc1, await interact.seefotune(v113), {
      at: './index.rsh:30:61:application',
      fs: ['at ./index.rsh:29:19:application call to [unknown function] (defined at: ./index.rsh:29:23:function exp)'],
      msg: 'seefotune',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v88, v89, v94, v119],
      evt_cnt: 1,
      funcNum: 4,
      lct: v114,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:32:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v121], secs: v123, time: v122, didSend: v59, from: v120 } = txn4;
        
        ;
        const cv97 = v121;
        const cv98 = v122;
        
        await (async () => {
          const v97 = cv97;
          const v98 = cv98;
          
          if (await (async () => {
            const v108 = v97 ? false : true;
            
            return v108;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v126 = v97 ? v94 : v88;
            sim_r.txns.push({
              kind: 'from',
              to: v126,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v121], secs: v123, time: v122, didSend: v59, from: v120 } = txn4;
    ;
    const v124 = stdlib.addressEq(v88, v120);
    stdlib.assert(v124, {
      at: './index.rsh:32:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv97 = v121;
    const cv98 = v122;
    
    v97 = cv97;
    v98 = cv98;
    
    continue;
    
    
    
    }
  const v126 = v97 ? v94 : v88;
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v89], secs: v91, time: v90, didSend: v29, from: v88 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v88, v89],
    evt_cnt: 0,
    funcNum: 1,
    lct: v90,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:19:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v96, time: v95, didSend: v33, from: v94 } = txn2;
      
      ;
      const v97 = false;
      const v98 = v95;
      
      if (await (async () => {
        const v108 = v97 ? false : true;
        
        return v108;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v126 = v97 ? v94 : v88;
        sim_r.txns.push({
          kind: 'from',
          to: v126,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v96, time: v95, didSend: v33, from: v94 } = txn2;
  ;
  let v97 = false;
  let v98 = v95;
  
  while (await (async () => {
    const v108 = v97 ? false : true;
    
    return v108;})()) {
    const v111 = stdlib.protect(ctc0, await interact.readfortune(), {
      at: './index.rsh:25:60:application',
      fs: ['at ./index.rsh:24:17:application call to [unknown function] (defined at: ./index.rsh:24:21:function exp)'],
      msg: 'readfortune',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v88, v89, v94, v111],
      evt_cnt: 1,
      funcNum: 3,
      lct: v98,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:27:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v113], secs: v115, time: v114, didSend: v49, from: v112 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v113], secs: v115, time: v114, didSend: v49, from: v112 } = txn3;
    ;
    const v116 = stdlib.addressEq(v94, v112);
    stdlib.assert(v116, {
      at: './index.rsh:27:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v121], secs: v123, time: v122, didSend: v59, from: v120 } = txn4;
    ;
    const v124 = stdlib.addressEq(v88, v120);
    stdlib.assert(v124, {
      at: './index.rsh:32:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv97 = v121;
    const cv98 = v122;
    
    v97 = cv97;
    v98 = cv98;
    
    continue;
    
    
    
    }
  const v126 = v97 ? v94 : v88;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAEEBSAmAgEAACI1ADEYQQHgKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAKlJJAxAAEokEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAE7ufoIjT+FlEHCFCwNP8xABJENP80AyEEWzQDVyggNP4yBkIA1UgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf5XKCA1/Uk1BRc1/IAE1Axs1jT8FlCwNP0xABJENP80/hZQNP1QKEsBVwBIZ0glNQEyBjUCQgDUSSMMQAAwIxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABJqLkXSwNANXACA0AyEEWzEAIjIGQgBGSIGgjQaIAOgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gAwjEANP8WUChLAVcAKGdIIzUBMgY1AkIAWDX/Nf41/TX8Nfs0/kEAE7EisgE0/LIII7IQNP2yB7NCABs0+zT8FlA0/VAoSwFXAEhnSCQ1ATIGNQJCABsxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v113",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v121",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v113",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v121",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d7d38038062000d7d8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610acf80620002ae6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a98bf223146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610890565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610890565b610281565b3480156100ca57600080fd5b506100d3610439565b60405161007a9291906108b3565b61005d6100ef366004610890565b6104d6565b6101046001600054146009610699565b61011e8135158061011757506001548235145b600a610699565b60008080556002805461013090610910565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610910565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610961565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f49291906109d6565b60405180910390a161020834156008610699565b6040805160a081018252600081830181815260608301829052608083018290528252825180840184528181526020808201839052808401918252855184516001600160a01b039091169052858101518451820152835133950194909452805191909152514392019190915261027c816106c2565b505050565b6102916005600054146011610699565b6102ab813515806102a457506001548235145b6012610699565b6000808055600280546102bd90610910565b80601f01602080910402602001604051908101604052809291908181526020018280546102e990610910565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b505050505080602001905181019061034e9190610a0b565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b9433836040516103819291906109d6565b60405180910390a16103953415600f610699565b80516103ad906001600160a01b031633146010610699565b6040805160a0810182526000818301818152606083018290526080830182905282528251808401845281815260208082019290925281830152835182516001600160a01b039182169052848201518351830152848401518351911690840152909161041d91908501908501610a7e565b6020808301805192151590925290514391015261027c816106c2565b60006060600054600280805461044e90610910565b80601f016020809104026020016040519081016040528092919081815260200182805461047a90610910565b80156104c75780601f1061049c576101008083540402835291602001916104c7565b820191906000526020600020905b8154815290600101906020018083116104aa57829003601f168201915b50505050509050915091509091565b6104e6600460005414600d610699565b610500813515806104f957506001548235145b600e610699565b60008080556002805461051290610910565b80601f016020809104026020016040519081016040528092919081815260200182805461053e90610910565b801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b50505050508060200190518101906105a39190610a0b565b6040805133815284356020808301919091528501358183015290519192507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1919081900360600190a16105f83415600b610699565b6040810151610613906001600160a01b03163314600c610699565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845289890151821683526005909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261069392600292909101906107a9565b50505050565b816106be5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151511561072a57805160408082015160209092015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610710573d6000803e3d6000fd5b50600080805560018190556107279060029061082d565b50565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261027c92600292909101905b8280546107b590610910565b90600052602060002090601f0160209004810192826107d7576000855561081d565b82601f106107f057805160ff191683800117855561081d565b8280016001018555821561081d579182015b8281111561081d578251825591602001919060010190610802565b50610829929150610863565b5090565b50805461083990610910565b6000825580601f10610849575050565b601f01602090049060005260206000209081019061072791905b5b808211156108295760008155600101610864565b60006040828403121561088a57600080fd5b50919050565b6000604082840312156108a257600080fd5b6108ac8383610878565b9392505050565b82815260006020604081840152835180604085015260005b818110156108e7578581018301518582016060015282016108cb565b818111156108f9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061092457607f821691505b6020821081141561088a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461095c57600080fd5b919050565b60006040828403121561097357600080fd5b6040516040810181811067ffffffffffffffff821117156109a457634e487b7160e01b600052604160045260246000fd5b6040526109b083610945565b8152602083015160208201528091505092915050565b8035801515811461095c57600080fd5b6001600160a01b0383168152813560208083019190915260608201906109fd9084016109c6565b151560408301529392505050565b600060608284031215610a1d57600080fd5b6040516060810181811067ffffffffffffffff82111715610a4e57634e487b7160e01b600052604160045260246000fd5b604052610a5a83610945565b815260208301516020820152610a7260408401610945565b60408201529392505050565b600060208284031215610a9057600080fd5b6108ac826109c656fea26469706673582212202c074f304759914b0225f2b3f7262c6f16fab5597682d0fd8f7831408dfdff2e64736f6c634300080c0033`,
  BytecodeLen: 3453,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:18:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:37:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:23:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:28:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
