# Adonis fullstack application

This is a fullstack boilerplate for AdonisJs, with a complete authentication system built in. It comes pre-configured with:

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. Validation
11. Session based authentication system

## How It looks:

![Welcome view](http://res.cloudinary.com/bahdcoder/image/upload/v1522486253/Screen_Shot_2018-03-31_at_9.32.58_AM_xssrgd.png)
![Register view](http://res.cloudinary.com/bahdcoder/image/upload/v1522486253/Screen_Shot_2018-03-31_at_9.32.18_AM_mdjkqj.png)
![Login view](http://res.cloudinary.com/bahdcoder/image/upload/v1522486252/Screen_Shot_2018-03-31_at_9.32.06_AM_wfu5jc.png)
![Home view](http://res.cloudinary.com/bahdcoder/image/upload/v1522486236/Screen_Shot_2018-03-31_at_9.32.32_AM_o3nupt.png)

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --blueprint bahdcoder/adonis-fullstack-auth
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Todo List

- [x] User registration
- [x] User login
- [x] Redirect if authenticated middleware
- [ ] Remember me
- [ ] Password resets
- [ ] Upgrade to use [adonis-persona](https://github.com/adonisjs/adonis-persona)
