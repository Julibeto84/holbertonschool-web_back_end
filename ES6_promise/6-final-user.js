import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((selected) =>
    selected.map((item) => {
      if (item.status === 'rejected') {
        return {
          status: item.status,
          value: item.reason.toString(),
        };
      }
      return {
        status: item.status,
        value: item.value,
      };
    })
  );
}
