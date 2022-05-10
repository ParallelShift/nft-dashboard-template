export const CONFIG = {
  TEMPLATE: {
    // 1. Set your NFT collection contract address
    "collection_address": "0xa492E89D5bCC766180f572AC8278C67A39cC8032",

    // 2. Set your blockchain chain ID where your NFT collection contract address is deployed (see below for value options)
    "block_chain_id": "56",

    // 3. Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
    "title": "My NFT Collection",

    // 4. (Optional) Display the floor price chart
    "timeseries_chart": true,

    // 5. (Optional) Set your banner image
    "banner_picture": "https://mint.plrtoken.com/collectionBanner.png",
  },

  // Supported networks - just for your reference
  FILTER_OPTIONS : [
    {name: "Ethereum", value: 1},
    {name: "Polygon", value: 137},
    {name: "Avalanche", value: 43114},
    {name: "Fantom", value: 250},
    {name: "Moonbeam", value: 1284},
    {name: "Moonriver", value: 1285},
    {name: "Arbitrum", value: 42161},
    {name: "BSC", value: 56}  
    ],
  // Supported timeframes - just for your reference
  GRAPH_OPTIONS : [
    {name: "7 Days", value: 7},
    {name: "1 Month", value: 30},
    {name: "3 Month", value: 90},
    {name: "1 Year", value: 365},
      {name: "All time", value: 0},
    ],
}