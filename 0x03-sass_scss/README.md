|   |   |
|---|---|
|<p><img src="https://img.icons8.com/color/100/000000/sass.png"/></p>| <h1>Sass & Scss 0x03.</h1>|
## Resources
**Read or watch:**
- [Sass Basics](https://intranet.hbtn.io/rltoken/ayoQ7NtS8w7tZvyeqhkzsw)
- [Sass control directives: @if, @for, @each and @while](https://intranet.hbtn.io/rltoken/EFKD6L9vpV8XevFF4gppGg)
- [Sass references](https://intranet.hbtn.io/rltoken/P7jm16HEuQb1FxMqlajjFQ)
- [The Sass Way](https://intranet.hbtn.io/rltoken/hMS2SLlzrvpn5yPuoXolKw)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, **without the help of Google:**

## General
- What Sass means
- How to write Sass & Scss file
- What is the difference between Sass and Scss
- What is the Sass preprocessing
- How to declare a variable
- How to use nested definition
- How to import a Sass file
- How to use mixins
- How to declare extend/inheritance styles
- How to manipulate operators

## Requirements
### General
- Allowed editors: vi, vim, emacs
- All your files will be executed on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
- All your files should end with a new line
- All your Scss files should have a comment at the beginning (i.e. syntax above)
- All your files should start by a comment describing the task
- A README.md file, at the root of the folder of the project, is mandatory
- The length of your files will be tested using wc

## More Info
### Comments for your Scss file:
All your Scss file must start with a comment block
```bash
cat my_styles.scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}
```
### Install Sass/Scss on Ubuntu 18.04 LTS
```bash
sudo apt-get install -y ruby2.5 ruby2.5-dev
sudo apt-get install ubuntu-dev-tools
gem install sass -v 3.7.4
sass --version
```
