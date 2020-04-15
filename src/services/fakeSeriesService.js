import GOT from '../images/got.jpg';
import Ozark from '../images/ozark.jpg';
import Magicians from '../images/magicians.png';
import Flash from '../images/flash.jpg';
import Smallville from '../images/smallville.jpg';
import BBT from '../images/BBT.jpg';
import Friends from '../images/friends.jpg';
import Charmed from '../images/charmed.jpg';
import Merlin from '../images/merlin.jpg';
import Sherlock from '../images/sherlock.jpg';
import Once from '../images/once.jpg';
import Supernatural from '../images/supernatural.jpg';
import Vamp from '../images/vamp.jpg';
import Stargate from '../images/stargate.jpg';
import Monk from '../images/monk.jpg';
import Arrow from '../images/arrow.jpg';
import Originals from '../images/originals.jpg';
import Shield from '../images/shield.jpg';
import Heist from '../images/heist.jpg';
import HouseOfCards from '../images/house.jpg';
import WalkingDead from '../images/dead.jpg';
import Lost from '../images/lost.jpg';
import LostGirl from '../images/lost-girl.jpg';
import The100 from '../images/100.jpg';

class fakeSeriesService {
    constructor() {
        this.series = [
            {
                name: 'Game Of Thrones',
                id: '88a7bfad-3e04-4d95-bcd9-55f8bcbdf631',
                url: `${GOT}`
            },
            {
                name: 'Ozark',
                id: 'bb78f1bf-9173-4e86-ac82-6a4f655ccfe5',
                url: `${Ozark}`
            },
            {
                name: 'The Magicians',
                id: '497982e4-349f-4052-8f4b-e5f6a6718ba6',
                url: `${Magicians}`
            },
            {
                name: 'The Flash',
                id: '3ee72a82-8845-48d2-b5ee-95a76fe517a3',
                url: `${Flash}`
            },
            {
                name: 'Smallville',
                id: 'cede68cb-33f2-4a31-8c4e-94e4d61883fa',
                url: `${Smallville}`
            },
            {
                name: 'The Big Bang Theory',
                id: 'a3fa0102-bcae-47ec-8d9d-10466f34a526',
                url: `${BBT}`
            },
            {
                name: 'Friends',
                id: '1c66e17f-cb41-4e2a-97e5-c706b4f1799b',
                url: `${Friends}`
            },
            {
                name: 'Charmed',
                id: '024ba60a-3c56-4e98-b663-fa9c27d29200',
                url: `${Charmed}`
            },
            {
                name: 'Merlin',
                id: 'e4b958c3-e785-457f-8858-f85e4d6b3ed5',
                url: `${Merlin}`
            },
            {
                name: 'Sherlock',
                id: 'b5b6b1e4-df29-4a5c-9fd7-0c93c2c05135',
                url: `${Sherlock}`
            },
            {
                name: 'Once Upon A Time',
                id: '3a5af499-5fc7-4a8f-8d89-81787524a2ef',
                url: `${Once}`
            },
            {
                name: 'Supernatural',
                id: '2cdc7231-b484-464b-a769-095ed66059dd',
                url: `${Supernatural}`
            },
            {
                name: 'The Vampire Diaries',
                id: '61b7ff92-4224-4d52-bc8b-70de8d03d231',
                url: `${Vamp}`
            },
            {
                name: 'Stargate Atlantis',
                id: '983fd918-937a-4060-b831-abed1a02c1d9',
                url: `${Stargate}`
            },
            {
                name: '12 Monkeys',
                id: '51cd4e72-ecd2-4d5a-ac24-b5bb9682d950',
                url: `${Monk}`
            },
            {
                name: 'Arrow',
                id: '40615cab-babc-434d-8e8b-e849ce601fcc',
                url: `${Arrow}`
            },
            {
                name: 'The Originals',
                id: '0c0a5666-3a9d-4cca-884e-55ed7d028bc3',
                url: `${Originals}`
            },
            {
                name: 'Agents Of S.H.I.E.L.D',
                id: '8a0a138a-3121-4d1f-aebb-a03c2d095d4d',
                url: `${Shield}`
            },
            {
                name: 'Money Heist',
                id: 'd7df23ba-dd8b-4d81-a355-c0739b6d4d8c',
                url: `${Heist}`
            },
            {
                name: 'House Of Cards',
                id: 'ca706a86-24ad-4e79-8139-37259fd38818',
                url: `${HouseOfCards}`
            },
            {
                name: 'The Walking Dead',
                id: '22a14ce4-d860-4d04-b422-faa32c335116',
                url: `${WalkingDead}`
            },
            {
                name: 'Lost',
                id: 'dbba2b1e-3b81-475f-abfe-af385a79046f',
                url: `${Lost}`
            },
            {
                name: 'Lost Girl',
                id: '2fb0a444-3667-4eb2-88bf-267751f4bfa2',
                url: `${LostGirl}`
            },
            {
                name: 'The 100',
                id: 'efb3302b-1b86-4884-9a35-6be5da2f6aba',
                url: `${The100}`
            }
        ];
    }

    async retrieveItems() {
        return Promise.resolve(this.series);
    }
}

export default fakeSeriesService;
