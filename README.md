# Node List

Recommended Node Configuration for Social X Protocol

## Node Format

```json
{
    "node_id": 10000000100000000000,
    "name_en": "Cryptocurrency",
    "name_cn": "加密货币",
    "aliases": "currencies",
    "description_en": "A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.",
    "description_cn": "区块链（blockchain或block chain）是借由密码学与共识机制等技术创建与存储庞大交易资料区块链的点对点网络系统。",
    "website": "https://en.wikipedia.org/wiki/Blockchain",
    "twitter": "",
    "img_url": ""
},
```

```
node_id : 1 00000001 001 0000001  (length is 19)

1       -     00000001   -       001       -      00000001     -
A-------|--------B-------|--------C--------|---------D---------|
```

A 区：1 位，根标识，`1000000000000000000` 属于根节点。

B 区：8 位，行业标识，比如 `00000001` 属于区块链行业，则区块链这个节点的 `node_id` 是 `1 00000001 000 00000000`。

C 区：3 位，分类标识，比如 `001` 属于"加密货币"，则加密货币这个节点的 `node_id` 是 `1 00000001 001 00000000`。

D 区：7 位，详细标识，比如 `00000001` 属于"比特币"，则比特币这个节点的 `node_id` 是 `1 00000001 001 00000001`。

例子如下

| node_id             | 行业标识   | 分类标识 | 详细标识 |
| ------------------- | ---------- | -------- | -------- |
| 1000000010000000000 | 区块链行业 | -        | -        |
| 1000000010010000000 | 区块链行业 | 加密货币 | -        |
| 1000000010010000001 | 区块链行业 | 加密货币 | 比特币   |
| 1000000010019999999 | 区块链行业 | 加密货币 | 其他货币 |
| 1000000010020000000 | 区块链行业 | 钱包     | -        |
| 1000000010020000001 | 区块链行业 | 钱包     | imToken  |
| 1000000010020000002 | 区块链行业 | 钱包     | MetaMask |
| 1000000010030000000 | 区块链行业 | 交易平台 | -        |
| 1000000010030000001 | 区块链行业 | 交易平台 | 币安     |
| 1000000010030000002 | 区块链行业 | 交易平台 | OKX      |

**Tips:**

- `node_id` min value is `1000000000000000000`
- `node_id` man value is `1999999999999999999`
