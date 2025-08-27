import Text from "./compenents/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import Icon from "./compenents/icon";
import Badge from "./compenents/badge";
import Button from "./compenents/button";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";

export default function App() {
  return (
    <div className="grid gap-3">
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

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-950" />
        <Icon svg={CheckIcon} className="fill-pink-500" />
        <Icon svg={SpinnerIcon} className="fill-red-500" animate />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">de 2 a 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>
    </div>
  );
}
