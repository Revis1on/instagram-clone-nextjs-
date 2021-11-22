function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://scontent.fskp2-1.fna.fbcdn.net/v/t1.6435-9/84610106_10216461897806928_7336277515683495936_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s0jhAuSbBv4AX8NE6cy&_nc_ht=scontent.fskp2-1.fna&oh=ff759c7f6e3de40450f9690b7ae663d1&oe=61AF6289"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">f.risteskii</h2>
        <h3 className=" text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
