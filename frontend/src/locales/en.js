const en = {
  translation: {
    header: {
      title: 'Hexlet chat',
      signedAs: 'Signed as: ',
      lang: 'Change lang',
      exit: 'Exit',
    },
    errorPage: {
      title: 'Oops!',
      notFound: 'Page not found',
      goMain: {
        text: 'But you can ',
        link: 'go to main page',
      },
    },
    login: {
      title: 'Login',
      noAccount: 'No acc?',
      signupLink: 'Registration',
      form: {
        username: 'Your nickname',
        password: 'Password',
        submit: 'Login',
        errors: {
          required: 'Required to fill',
          invalidRequest: 'Not valid username or password',
        },
      },
    },
    signup: {
      title: 'Registration',
      form: {
        username: 'User name',
        password: 'Password',
        confirmPassword: 'Confirm password',
        submit: 'Registration',
        errors: {
          required: 'Required to fill',
          usernameLength: 'From 3 to 20 symbols',
          passwordLength: 'More 6 symbols',
          confirmPassword: 'Passwords must match',
          invalidRequest: 'This user already exists',
        },
      },
    },
    chat: {
      channels: {
        title: 'Channels',
        removeButton: 'Delete',
        renameButton: 'Rename',
        addButton: '+',
        editButton: 'Channel management',
        marker: '#',
      },
      messages: {
        marker: '#',
        count_one: '{{count}} message',
        count_other: '{{count}} messages',
        form: {
          newMessage: 'Enter message...',
        },
      },
    },
    notifications: {
      add: 'Channel created',
      remove: 'Channel deleted',
      rename: 'Channel renamed',
      errors: {
        network: 'Connection error',
        server: 'Data loading error',
        unknown: 'Unknown error',
        parsing: 'Data loading error',
      },
    },
    modals: {
      add: {
        title: 'Add channel',
        form: {
          name: 'Channel name',
          submit: 'Submit',
          cancel: 'Cancel',
          errors: {
            required: 'Required field',
            length: '3 to 20 characters',
            uniq: 'Must be unique',
          },
        },
      },
      remove: {
        title: 'Remove channel',
        description: 'Are you sure?',
        submit: 'Remove',
        cancel: 'Cancel',
      },
      rename: {
        title: 'Rename channel',
        form: {
          name: 'New channel name',
          submit: 'Submit',
          cancel: 'Cancel',
          errors: {
            required: 'Required field',
            length: '3 to 20 characters',
            uniq: 'Must be unique',
          },
        },
      },
    },
  },
};

export default en;
