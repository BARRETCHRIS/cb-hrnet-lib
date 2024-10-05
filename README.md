# cb-hrnet-lib

Une bibliothèque de composants React réutilisables conçue pour simplifier le développement d'interfaces utilisateur. Cette bibliothèque contient des composants essentiels comme un modal et un champ de sélection automatique.

## Table des matières

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
  - [Modal](#modal)
  - [AutoComplete](#autocomplete)
  - [Validation des champs](#validation-des-champs)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Auteur](#auteur)

## Description

La bibliothèque **cb-hrnet-lib** comprend deux composants principaux :

1. **Modal** : Un composant pour afficher des fenêtres modales.
2. **AutoComplete** : Un composant permettant aux utilisateurs de sélectionner des options à partir d'une liste déroulante.

En plus de ces composants, la bibliothèque propose des fonctions de validation pour des formulaires.

## Prérequis

Avant d'installer cette bibliothèque, assurez-vous d'avoir les éléments suivants :

- **Node.js** : Assurez-vous d'avoir installé Node.js sur votre machine. Vous pouvez le télécharger depuis [nodejs.org](https://nodejs.org/).
- **Yarn** : Cette bibliothèque est optimisée pour Yarn. Si vous ne l'avez pas encore installé, vous pouvez l'installer en suivant les instructions sur [yarnpkg.com](https://classic.yarnpkg.com/en/docs/install).

## Installation

Pour installer la bibliothèque, exécutez la commande suivante dans votre projet React :

```bash
yarn add cb-hrnet-lib   

## Utilisation des composants de la librairie    

### Modal    
**Description : ** Le composant Modal est un modal simple que vous pouvez utiliser pour afficher des informations ou des formulaires.

**Exemple : **
```javascript
import React, { useState } from 'react';
import Modal from 'cb-hrnet-lib';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h1>My Modal</h1>
        <p>This is a simple modal example.</p>
      </Modal>
    </div>
  );
};

export default MyComponent;    

**Props : ** 
| Prop        | Type       | Description                                    |
|-------------|------------|------------------------------------------------|
| `isOpen   ` | `boolean`  | indique si le modal doit être ouvert ou non.   |
| `onClose `  | `function` | Fonction à appeler pour fermer le modal.       |
| `children`  | `node`     | Contenu à afficher dans le modal.              |
    

### AutoComplete    
**Description : ** Le composant AutoComplete permet aux utilisateurs de sélectionner une option parmi une liste d'options.    

**Exemple : **    
```javascript
import React from 'react';
import AutoComplete from 'cb-hrnet-lib';

const options = [
  { name: "California", abbreviation: "CA" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Florida", abbreviation: "FL" }
];

const MyComponent = () => {
  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <div>
      <h2>Select a State</h2>
      <AutoComplete options={options} onSelect={handleSelect} />
    </div>
  );
};

export default MyComponent;    

**Props : **     
| Prop        | Type       | Description                                               |
|-------------|------------|-----------------------------------------------------------|
| `options  ` | `array `   | Liste d'options à afficher dans le sélecteur.             |
| `onSelect ` | `function` | Fonction appeler lorsque l'utilisateur sélectionne option.|
    
        
### Validation des inputs de formulaires    
**Description : ** Cette bibliothèque inclut également des fonctions de validation pour les champs de formulaire. Vous pouvez valider des champs comme le prénom, le nom, la rue, la ville et le code postal.    

**Exemple : **    
```javascript
import { validateForm } from 'cb-hrnet-lib';

const fields = {
  firstName: 'John',
  lastName: 'Doe',
  street: '123 Main St',
  city: 'Anytown',
  zipCode: '12345'
};

const errors = validateForm(fields);
console.log(errors); // Affiche les erreurs de validation, le cas échéant.    

**Props : **     
| champ       | Type       | Description                                    |
|-------------|------------|------------------------------------------------|
| `fields `   | `object `  | Un objet contenant les champs à valider.       |
| `return `   | `object `  | Objet contenant les erreurs pour chaque champ. |

**Props : ** 
| champ      | Regex                    | Description                  |
|------------|--------------------------|------------------------------|
| `firstName`|`/^[A-Za-z]{2,}$/ `       | Au moins 2 lettres.          |
| `lastName `|`/^[A-Za-z]{2,}$/t`       | Au moins 2 lettres.          |
| `street`   |`/^[A-Za-z0-9\s,'-]{3,}$/`| Lettres, chiffres et certains caractères spéciaux.|
| `city `    |`/^[A-Za-z\s]{2,}$/`      | Lettres et espaces seulement.|
| `zipCode`  |`/^\d{5}$/`               | Code postal à 5 chiffres.    |


## Contribuer    

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes suivantes :

Forkez le dépôt.
Créez votre branche (git checkout -b feature/YourFeature).
Committez vos changements (git commit -m 'Add some feature').
Poussez vers la branche (git push origin feature/YourFeature).
Ouvrez une pull request.
Licence
Distribué sous la licence MIT. Voir LICENSE pour plus d'informations.