


exports.reduceUserDetails = (data) => {
    let userDetails = {};

    if(data.bio.trim() != null) userDetails.bio = data.bio;
    if(data.address.trim() != null) userDetails.address = data.address;

    return userDetails;
}