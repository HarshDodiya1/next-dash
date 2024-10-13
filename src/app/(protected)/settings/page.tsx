import { auth } from "@/../auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      This is the our session:  {" "}{JSON.stringify(session)}
      <div>
      SettingsPage
      </div>

    </div>
  );
};

export default SettingsPage;
