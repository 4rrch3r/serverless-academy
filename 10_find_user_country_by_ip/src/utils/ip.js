function ipToInt(ip)
{
    return ip.split`.`.reduce((int, value) => int * 256 + +value);
}

function intToIp(int)
{
    return [
        (int>>24)&0xff,
        (int>>16)&0xff,
        (int>>8)&0xff,
        int&0xff
      ].join('.');
}

module.exports={
    ipToInt,intToIp
}