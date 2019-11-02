# amazon-flashcards

Flashcards for memorizing the 14 amazon leadership principles.  
Press arrows to paginate, press a card to flip it.

---
### Running it

#### Clone the repository.

    $ git clone https://github.com/babangsund/amazon-flashcards

#### Install dependencies 

Using [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/):

    $ npm/yarn install

#### Run it

Using [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/):

    $ npm/yarn start

---
### Details

#### Dependencies

This project was bootstrapped with [create react app](https://github.com/facebook/create-react-app).
Additional dependencies have been installed:

1. [**`Prettier`**](https://prettier.io/): Code formatting.
2. [**`Typescript`**](https://github.com/microsoft/typeScript): Static type checker, etc.
3. [**`Emotion`**](https://github.com/emotion-js/emotion): Locally scoped css components.

#### src/

- **`Constants`**: Application constants.
    - `LS_PRINCIPLES`: The 14 leadership principles.
    - `COUNT`: 14.
- **`components/`**: Dumb components.
    - `Card`: Renders an item.
    - `Cards`: Renders a list of items.
- **`icons/`**: Svg icons.
    - `chevron-left-solid.svg`:  Chevron left.
    - `chevron-right-solid.svg`:  Chevron right.
- **`providers/`**: All app context providers.
	- `StyleProvider`: Provides the `emotion` theme, along with global styling and a set of theme functions.

---
### Credits

amazon-flashcards is built and maintained by **babangsund**.  
[@blog](https://babangsund.com/).  
[@github](https://github.com/babangsund).  
[@twitter](https://twitter.com/babangsund). 
