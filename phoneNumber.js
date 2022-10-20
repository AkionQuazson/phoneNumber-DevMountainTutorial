const createPhoneNumber = (arr) => {
    let phoneNumber = arr.join('');
    phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6)}`
    return phoneNumber;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
console.log(createPhoneNumber([3,8,5,1,2,5,3,6,9,2]));