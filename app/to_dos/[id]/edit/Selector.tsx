import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const StatusSelect = ({ status }: { status?: string }) => {
    const [value, setValue] = useState(status)

  return (
    <Select.Root
        defaultValue={status}
        onValueChange={(value) => setValue(value)}>
        <Select.Trigger className="SelectTrigger" aria-label="Status">
        <Select.Value placeholder="Set Status" />
            <Select.Icon className="SelectIcon">
                <ChevronDownIcon />
            </Select.Icon>
        </Select.Trigger>

        <Select.Content className="SelectContent">
            <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
            </Select.ScrollUpButton>
                <Select.Viewport className="SelectViewport">
                    <Select.Group>
                        <Select.Label className="SelectLabel">Status</Select.Label>
                        <Select.Item value="OPEN">Open</Select.Item>
                        <Select.Item value="IN_PROGRESS">In Progress</Select.Item>
                        <Select.Item value="CLOSED">Closed</Select.Item>
                    </Select.Group>
                </Select.Viewport>
            </Select.Content>
    </Select.Root>

  );
};

export default StatusSelect;
