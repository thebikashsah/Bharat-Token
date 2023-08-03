

Bharat Token.

It is a Cryptocurrency  built on ICP Blockchain with Motoko Backend.

I have build a website where you can claim free BharatToken, Check Your Balance and Transfer Token to Any Account.

Link: https://sgenc-laaaa-aaaal-qcbea-cai.icp0.io/ 

Authentication is done by Internet Identity used by ICP, which is a anonymous authentication technique that uses the concept of Digital Signaturs which use Public-Private Key encryption.



There can be many reason why people create Tokens?

First of all there is a difference between Crypto Token and Crypto Coin.

Crypto Coin have there own Blockchain but Crypto Token is built on existing Blockchain.

Crypto Tokens in Web 3 world can be used to fund a Web 3 Startup, where you can launch ICO for your startup and people can buy the tokens to support your Startup, it the Startup does well then the price of token appreciates.

My Motivation is different, when I was in 1st Year of my college I was obssessed with Money and how it works, and I saw a documentary about 2008 Crisis on how this powerfull banks have control over the monetary system and credit, which can be solved by a decentralised currency like Bitcoin, BharatToken etc.

I am in tech, so I tried to make my own Crypto Token on Blockchain.


Bharat Token is not listed on any Exchange, so currently you cannot exchange is for some other currency. I want to try to list it.

I don’t know the process yet but I will learn in the future and list it.

```cpp

APIs:

public shared(msg) transfer(To: Principal, Amount: Nat) : async Text

public query balanceOf(user: Principal) : async Nat

public shared(msg) payOut() : aysnc Text

DataStructure:

Balances are Stored in stable HashMap: Which persists across updates.
Map< Principal, Nat> 

Owner(Which is Me) has a principal id where the initial amount is stored.
```