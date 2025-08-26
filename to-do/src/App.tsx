import Text from "./compenents/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-md-bold" className="text-pink-400">
        Olá mundo
      </Text>
      <Text variant="body-md" className="text-red-400">
        Olá mundo
      </Text>
      <Text variant="body-sm-bold" className="text-amber-500">
        Olá mundo
      </Text>
    </div>
  );
}
