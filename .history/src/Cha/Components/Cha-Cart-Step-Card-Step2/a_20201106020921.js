const [name, setName] = useState('');
const [mobile, setMobile] = useState('');
const [takeWay, setTakeWay] = useState('');
const [address, setAddress] = useState('');
const [memberSid, setMemberSid] = useState('');
const [beastieCoin, setBeastieCoin] = useState('');

setName(data[0].name);
setMobile(data[0].mobile);
setTakeWay(data[0].take_way);
setAddress(data[0].address);
setMemberSid(data[0].member_sid);
setBeastieCoin(data[0].beastie_coin);

const newData = {
  member_sid: memberSid,
  order_state: '已送達',
  order_name: 'aaa',
  name: name,
  mobile: mobile,
  address: address,
  beastie_coin: beastieCoin,
  take_way: takeWay,
};
