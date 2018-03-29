# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

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

### Browser tests

Run the following command to run headless browser tests.

```js
adonis test
// or
npm test
```

### Todo List

- [x] User registration
- [x] User login
- [x] Redirect if authenticated middleware
- [ ] Remember me
- [ ] Password resets
- [ ] Upgrade to use [adonis-persona](https://github.com/adonisjs/adonis-persona)
