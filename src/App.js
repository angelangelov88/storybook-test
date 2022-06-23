import Badge from './components/Badge';
import {InboxIcon, BellIcon} from '@heroicons/react/outline';


function App() {
  return (
      <Badge
        children="1"
        className=""
        size="sm"
        color="teal"
        LeadingIcon={InboxIcon}
        TrailingIcon={BellIcon}
        rounded="full"
        iconOnly={false}
      />
      );
}

export default App;
