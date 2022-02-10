import Select from "./Select";

export default function App() {
  const options = [{ label: "React" }, { label: "Vue" }, { label: "Angular" }];
  const onSelect = (element) => {
    console.log(element);
  };
  const getOptionLabel = (option) => {
    console.log(option, option.label);
    return option.label;
  };
  return (
    <>
      <Select
        options={options}
        onSelect={onSelect}
        getOptionLabel={getOptionLabel}
        placeHolder="Select Course"
      />
    </>
  );
}
