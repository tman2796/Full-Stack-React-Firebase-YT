let db = {
    users: [{
        userId: 'dh23ggj5h32g543j5gf43',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2020-03-23T16:49:09.281Z',
        imageUrl: 'image/dsfsdfdsg/asdasdas',
        bio: 'Hello my name is user and im a user',
        website: 'https://user.com',
        location: 'Georgia, USA'
    }],
    screams: [{
        userHandle: 'user',
        body: "this is the scream body",
        createdAt: '2020-03-23T16:49:09.281Z',
        likeCount: 5,
        commentCount: 3
    }],
    comments: [{
        userHandle: 'user',
        screamId: 'sdffsdgfdssdfafd',
        body: 'this is the body of a comment on a scream',
        createdAt: '2020-03-23T16:49:09.281Z',
    }]
};

const userDetails = {
    //Redux data
    credentials: {
        userId: 'N456JDSF4564ASD3165B',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2020-03-23T16:49:09.281Z',
        imageUrl: 'image/dsfsdfdsg/asdasdas/asddgsgf',
        bio: 'Hello my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Georgia, USA'
    },
    likes: [{
            userHandle: 'user',
            screamId: 'sdgfdfhgfhsdgsad'
        },
        {
            userHandle: 'user',
            screamId: '654asdsdgsfdsafasd'
        }
    ]
}