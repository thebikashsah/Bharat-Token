import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";


actor Token{
    let owner : Principal = Principal.fromText("texpv-k6fxn-cohma-wqsul-kfs2c-bpgto-v3o4b-vr3ve-4oiaf-lnn4c-6ae");

    let totalSupply: Nat = 100000;
    let symbol: Text = "BHT";
    let name: Text = "Bharat Token";

    private stable var balanceEntries: [(Principal, Nat)] = [];

    private var balances = HashMap.HashMap< Principal, Nat> (1, Principal.equal, Principal.hash);

    if(balances.size() < 1 ){
            balances.put(owner, totalSupply);

        };

    public query func balanceOf(who: Principal) : async Nat{
        
        let balance = switch(balances.get(who)) {
            case null 0;
            case (?result) result;
        };

        return balance;

    };

    public query func getSymbol(): async Text{

        return symbol;
    };

    public shared(msg) func payOut(): async Text{
        Debug.print(debug_show(msg.caller));
        
        var reply ="Success!";
        if(balances.get(msg.caller) == null){

            var senderAmount = await balanceOf(owner);
            let amount=100;
           
            if(senderAmount >= amount){
                var newS: Nat =  senderAmount - amount;
                balances.put(owner, newS);
                balances.put(msg.caller,amount);
            }else{
                reply:= "Insufficient Balance!";
            };

            
        }else{
            reply:="Already Claimed!";
            
        };
    
        return reply;
    };

    public shared(msg) func transfer(to: Principal, amount: Nat) : async Text{
        var reply="Success!";
        var senderId : Principal =msg.caller;

        var senderAmount = await balanceOf(senderId);

        if(senderAmount >= amount){
            var newS: Nat =  senderAmount - amount;
            balances.put(senderId, newS);

            var toA = await balanceOf(to);
            balances.put(to, toA+amount);

        }else{
            reply:= "Insufficient Balance!";
        };

        return reply;

    };

    system func preupgrade(){
        balanceEntries:= Iter.toArray(balances.entries());
    };


    system func postupgrade(){
        balances:= HashMap.fromIter<Principal, Nat>(balanceEntries.vals(),1,Principal.equal, Principal.hash);

        if(balances.size() < 1 ){
            balances.put(owner, totalSupply);

        }
    };


};