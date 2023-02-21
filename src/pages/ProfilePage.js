import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageMainLayout from "../layouts/PageMainLayout";
import avatar from "../assets/blank.png";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <PageMainLayout>
        <div className="bg-[#171A21] h-screen p-8">
          <div className="flex gap-8 text-2xl">
            <img src={avatar} className="h-40" />
            <p>username</p>
          </div>
          <div className="bg-black p-3 my-2">Recent activity</div>
        </div>
      </PageMainLayout>
      <Footer />
    </>
  );
}
