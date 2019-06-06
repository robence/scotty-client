import React from 'react';

// import Spinner from '../ui/Spinner';
// import Card from '../ui/Card';

// function getCards(): JSX.Element[] {
//   return Array(5)
//     .fill(null)
//     .map(
//       (_, i): JSX.Element => (
//         <Card key={i}>
//           <Spinner loader={`Loader${i + 1}`} />
//         </Card>
//       ),
//     );
// }

export default function Dashboard(): JSX.Element {
  // const cardList = getCards();
  const cardList: any = [];
  return <div className="dashboard">{cardList}</div>;
}
