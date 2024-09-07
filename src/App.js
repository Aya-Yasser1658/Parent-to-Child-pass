import Form from './form';

function App() {
  const getData= (data) => {
    console.log("coming from App JS folder (Parent)",data)
  };
  return (
    <div>
      <Form onSubmit={ getData}/>
    </div>
  );
}

export default App;
