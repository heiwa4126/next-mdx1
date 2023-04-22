export function Test({ name }: { name?: string }) {
  return (
    <span className="test">
      <br />
      Hello {name ?? "(no name)"}
    </span>
  );
}

export default Test;
