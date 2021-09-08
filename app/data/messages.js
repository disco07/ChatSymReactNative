import {Images} from "../config";

export default {
    id: '1',
    users: [{
        id: 1,
        firstName: 'Rokia',
        lastName: 'KONE',
        image: Images.avatarFemale3,
    }, {
        id: 'u2',
        firstName: 'Rokia KONE',
        imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    }],
    messages: [
        {
        id: 'm1',
        content: 'How are you, Mom!',
        createdAt: '2021-10-10T12:48:00.000Z',
        user: {
            id: 1,
            firstName: 'Vadim',
        },
    }, {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2021-10-10T12:49:00.000Z',
        user: {
            id: 'u2',
            firstName: 'Rokia KONE',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2021-10-10T12:50:00.000Z',
        user: {
            id: 'u2',
            firstName: 'Rokia KONE',
        },
    }, {
        id: 'm4',
        content: 'Good as well, preparing for the coding now.',
        createdAt: '2021-10-10T12:51:00.000Z',
        user: {
            id: 1,
            firstName: 'Vadim',
        },
    }, {
        id: 'm5',
        content: 'What are you doing?',
        createdAt: '2021-10-10T12:52:00.000Z',
        user: {
            id: 1,
            firstName: 'Vadim',
        },
    }, {
        id: 'm6',
        content: 'going to the Moooooon',
        createdAt: '2021-10-10T12:53:00.000Z',
        user: {
            id: 'u2',
            firstName: 'Rokia KONE',
        },
    }, {
        id: 'm7',
        content: 'Tomorow, I will see you!',
        createdAt: '2021-10-10T12:54:00.000Z',
        user: {
            id: 'u2',
            firstName: 'Rokia KONE',
        },
    }
    ]
}