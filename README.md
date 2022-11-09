[![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-blue.svg?style=flat)](./CODE_OF_CONDUCT.md)

# Jotform File Proxy

A simple proxy that solves a 302 redirect problem with files uploaded to Jotform.

When a user submits an image or document to a Jotform form, a special URL is generated for each image and is passed to the Make service using an API call. These URLs look like this:

`https://www.jotform.com/uploads/user/123/456/moon.jpg`

The URL passed to Make via the Jotform API is actually a URL to a location that then redirects the user to a new file, so asking for the above file actually redirects you to something like:

`https://files.jotform.com/jufs/user/123/456/moon.jpg?md5=W1BACpVCGAAmTK35MiIsTg&expires=1666889933`

If you need to pass these images to Google Sheets using the Sheets API, that service does not support 302 redirects and will fail. Changing the `www.jotform.com` part of the URL to this proxy will make that image get piped through the app to Google sheets without a redirect.

## Setup & Installation

```shell
yarn run install
node app.js
```

## Developing Locally

This is a simple app written with Express. Their [extensive documentation](https://expressjs.com/en/starter/installing.html) will help you get up and running.

## Code of Conduct

This repository falls under [U.S. Digital Response’s Code of Conduct](./CODE_OF_CONDUCT.md), and we will hold all participants in issues, pull requests, discussions, and other spaces related to this project to that Code of Conduct. Please see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for the full code.

## Contributing

This project wouldn’t exist without the hard work of many people. Thanks to the following for all their contributions! Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) to find out how you can help.

**Lead Maintainer:** [@kevee](https://github.com/kevee)

**Additional Contributors:**

- List
- of
- Contributors

## License & Copyright

Copyright (C) 2022 U.S. Digital Response (USDR)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License. You may obtain a copy of the License at:

[`LICENSE`](./LICENSE) in this repository or http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
