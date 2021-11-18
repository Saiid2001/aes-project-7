function encrypt(data, key){


    return {
        out: "00112233445566778899aabbccddeeff", 
        intermediate: [
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
        ],
        subkeys: [
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
        ]
    
    }
}

function decrypt(data, key){

    return {
        out: "00112233445566778899aabbccddeeff", 
        intermediate: [
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
        ], 
        subkeys:  [
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
        ]
    
    }
}

function computeOneRound(data, subkeys){

    return {
        out: "00112233445566778899aabbccddeeff", 
        intermediate: [
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
            "00112233445566778899aabbccddeeff",
        ], 
    }
}

function expandKey(key){


    return [
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
            "00112233",
        ]
    

}


function hexToBinary(hex){
    return '0000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000'
}

function differences(s1, s2){
    return [0,2,4,5,6,7,8,11,12]
}




export default  {
    encrypt, 
    decrypt, 
    computeOneRound, 
    expandKey,
    hexToBinary,
    differences
}
