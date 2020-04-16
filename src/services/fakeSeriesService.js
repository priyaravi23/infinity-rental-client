import GOT from '../images/got.jpg';
import Ozark from '../images/ozark.jpg';
import Magicians from '../images/magicians.png';
import Flash from '../images/flash.jpg';
import Smallville from '../images/smallville.jpg';
import BBT from '../images/BBT.jpg';
import Friends from '../images/friends.jpg';
import Fringe from '../images/fringe.jpg';
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
import Legacies from '../images/legacies.jpg';
import Vikings from '../images/vikings.jpg';
import StrangerThings from '../images/stranger.jpg';
import XFliles from '../images/xfiles.jpg';
import Prison from '../images/prison.jpg';
import Dexter from '../images/dexter.jpg';
import BreakingBad from '../images/breaking.jpg';
import Handmaids from '../images/handmaid.jpg';
import Nikita from '../images/nikita.jpg';
import Charmed from '../images/charmed.jpg';
import Dystopian from '../images/dystopian.png';
import Witcher from '../images/witcher.jpg';

class fakeSeriesService {
    constructor() {
        this.series = [
            {
                name: 'Game Of Thrones',
                id: '88a7bfad-3e04-4d95-bcd9-55f8bcbdf631',
                url: `${GOT}`,
                numberInStock: 0
            },
            {
                name: 'The Magicians',
                id: '497982e4-349f-4052-8f4b-e5f6a6718ba6',
                url: `${Magicians}`,
                numberInStock: 2
            },
            {
                name: 'The Flash',
                id: '3ee72a82-8845-48d2-b5ee-95a76fe517a3',
                url: `${Flash}`,
                numberInStock: 4
            },
            {
                name: 'Ozark',
                id: 'bb78f1bf-9173-4e86-ac82-6a4f655ccfe5',
                url: `${Ozark}`,
                numberInStock: 0
            },
            {
                name: 'Smallville',
                id: 'cede68cb-33f2-4a31-8c4e-94e4d61883fa',
                url: `${Smallville}`,
                numberInStock: 2
            },
            {
                name: 'The Big Bang Theory',
                id: 'a3fa0102-bcae-47ec-8d9d-10466f34a526',
                url: `${BBT}`,
                numberInStock: 0
            },
            {
                name: 'Friends',
                id: '1c66e17f-cb41-4e2a-97e5-c706b4f1799b',
                url: `${Friends}`,
                numberInStock: 5
            },
            {
                name: 'Fringe',
                id: '024ba60a-3c56-4e98-b663-fa9c27d29200',
                url: `${Fringe}`,
                numberInStock: 3
            },
            {
                name: 'Sherlock',
                id: 'b5b6b1e4-df29-4a5c-9fd7-0c93c2c05135',
                url: `${Sherlock}`,
                numberInStock: 0
            },
            {
                name: 'Merlin',
                id: 'e4b958c3-e785-457f-8858-f85e4d6b3ed5',
                url: `${Merlin}`,
                numberInStock: 3
            },
            {
                name: 'Once Upon A Time',
                id: '3a5af499-5fc7-4a8f-8d89-81787524a2ef',
                url: `${Once}`,
                numberInStock: 5
            },
            {
                name: 'Supernatural',
                id: '2cdc7231-b484-464b-a769-095ed66059dd',
                url: `${Supernatural}`,
                numberInStock: 0
            },
            {
                name: 'Stargate Atlantis',
                id: '983fd918-937a-4060-b831-abed1a02c1d9',
                url: `${Stargate}`,
                numberInStock: 3
            },
            {
                name: '12 Monkeys',
                id: '51cd4e72-ecd2-4d5a-ac24-b5bb9682d950',
                url: `${Monk}`,
                numberInStock: 2
            },
            {
                name: 'The Vampire Diaries',
                id: '61b7ff92-4224-4d52-bc8b-70de8d03d231',
                url: `${Vamp}`,
                numberInStock: 0
            },
            {
                name: 'Arrow',
                id: '40615cab-babc-434d-8e8b-e849ce601fcc',
                url: `${Arrow}`,
                numberInStock: 4
            },
            {
                name: 'Money Heist',
                id: 'd7df23ba-dd8b-4d81-a355-c0739b6d4d8c',
                url: `${Heist}`,
                numberInStock: 0
            },
            {
                name: 'The Originals',
                id: '0c0a5666-3a9d-4cca-884e-55ed7d028bc3',
                url: `${Originals}`,
                numberInStock: 4
            },
            {
                name: 'Agents Of S.H.I.E.L.D',
                id: '8a0a138a-3121-4d1f-aebb-a03c2d095d4d',
                url: `${Shield}`,
                numberInStock: 2
            },
            {
                name: 'House Of Cards',
                id: 'ca706a86-24ad-4e79-8139-37259fd38818',
                url: `${HouseOfCards}`,
                numberInStock: 2
            },
            {
                name: 'The Walking Dead',
                id: '22a14ce4-d860-4d04-b422-faa32c335116',
                url: `${WalkingDead}`,
                numberInStock: 0
            },
            {
                name: 'Lost',
                id: 'dbba2b1e-3b81-475f-abfe-af385a79046f',
                url: `${Lost}`,
                numberInStock: 2
            },
            {
                name: 'Lost Girl',
                id: '2fb0a444-3667-4eb2-88bf-267751f4bfa2',
                url: `${LostGirl}`,
                numberInStock: 3
            },
            {
                name: 'Prison Break',
                id: 'b7f47bca-e77b-4259-947c-6d5156551b63',
                url: `${Prison}`,
                numberInStock: 0
            },
            {
                name: 'The 100',
                id: 'efb3302b-1b86-4884-9a35-6be5da2f6aba',
                url: `${The100}`,
                numberInStock: 1
            },
            {
                name: 'The X-Files',
                id: 'e38a3e70-79b2-46f4-b925-3ea83358e927',
                url: `${XFliles}`,
                numberInStock: 0
            },
            {
                name: 'Legacies',
                id: 'cd99fd34-88d2-4af7-835c-49eacc43d1ea',
                url: `${Legacies}`,
                numberInStock: 2
            },
            {
                name: 'Vikings',
                id: '27614503-b15c-4950-a9df-b0d0d2638f65',
                url: `${Vikings}`,
                numberInStock: 1
            },
            {
                name: 'Stranger Things',
                id: '5f3b0c49-4556-4452-9b2a-580ea17b74ab',
                url: `${StrangerThings}`,
                numberInStock: 0
            },
            {
                name: 'Dexter',
                id: '1e9ff89e-903e-4d71-bf59-360568ea81da',
                url: `${Dexter}`,
                numberInStock: 3
            },
            {
                name: 'Breaking Bad',
                id: '64f317c8-6f0d-4d33-b798-87ccd32de8ea',
                url: `${BreakingBad}`,
                numberInStock: 0
            },
            {
                name: 'The Handmaids Tale',
                id: 'cc2240c6-7f48-4016-b999-0ef11a437a58',
                url: `${Handmaids}`,
                numberInStock: 1
            },
            {
                name: 'Nikita',
                id: '69d603ae-701f-4b5d-b6f7-dd460d94b396',
                url: `${Nikita}`,
                numberInStock: 4
            },
            {
                name: 'Charmed',
                id: 'abe03945-fd59-45b0-b1d4-5fa4b35e7145',
                url: `${Charmed}`,
                numberInStock: 2
            },
            {
                name: '3%',
                id: 'b72c606f-8b7b-48f0-8320-369e9d55ead1',
                url: `${Dystopian}`,
                numberInStock: 0
            },
            {
                name: 'The Witcher',
                id: 'a54b2ddd-2344-4b8c-8bc7-de45e493e182',
                url: `${Witcher}`,
                numberInStock: 1
            }
        ];
    }

    async retrieveItems() {
        return Promise.resolve(this.series);
    }
}

export default fakeSeriesService;
