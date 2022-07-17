import Table from "~/components/Table";

const Tables = () => {
  return (
    <div className="">
      {/* tables */}
      <div className="grid grid-cols-8 p-4 gap-y-10">
        <Table full={true} number="1" />
        <Table full={false} number="2" />
        <Table full={false} number="3" />
        <Table full={true} number="4" />
        <Table full={true} number="5" />
        <Table full={true} number="6" />
        <Table full={true} number="7" />
        <Table full={true} number="8" />
        <Table full={true} number="10" />
        <Table full={false} number="11" />
        <Table full={false} number="12" />
        <Table full={true} number="13" />
        <Table full={false} number="14" />
        <Table full={true} number="15" />
        <Table full={true} number="16" />

      </div>
    </div>
  );
};

export default Tables;
