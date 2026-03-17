import Image from "next/image";
import logoimg from "@/assets/logo.png";
import Link from "next/link";
import FooterSAU from "@/components/FooterSAU";

export default function Page() {
  return (
    <>
      <div
        className="w-3/5 mt-20 p-10 shadow-xl mx-auto
                      border border-gray-400 rounded-xl
                      flex flex-col justify-center items-center"
      >
        {/* แสดงรูปจาก assets ในโปรเจ็กต์ */}
        <Image src={logoimg} alt="logo" width={100} height={100} />

        {/* แสดงชื่อแอปฯ + การทำงาน */}
        <h1 className="mt-5 text-2xl font-bold text-gray-700">
          Manage Task App
        </h1>
        <h1 className="mt-3 text-lg text-gray-700">แก้ไขงาน</h1>

        {/* ส่วนของการเพิ่มงาน และรายละเอียดงาน */}
        <div className="w-full flex flex-col mt-5">
          <h1>ชื่องาน</h1>
          <input
            type="text"
            className="p-2 border border-gray-700 rounded mt-1 mb-2"
          />
          <h1>รายละเอียดงาน</h1>
          <textarea
            className="p-2 border border-gray-700 rounded mt-1 mb-3"
            rows={4}
          ></textarea>
        </div>

        {/* ส่วนของการเลือกรูป */}
        <div className="w-full flex flex-col mt-5">
          <h1>อัปโหลดรูปภาพ</h1>
          <input
            id="selectImage"
            type="file"
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="selectImage"
            className="px-3 py-2 bg-blue-600 text-white rounded mt-1 mb-2 w-30 text-center"
          >
            เลือกรูปภาพ
          </label>
        </div>

        {/* ส่วนของการเลือกสถานะงาน */}
        <div className="w-full flex flex-col mt-5">
          <h1>สถานะงาน</h1>
          <select className="p-2 border border-gray-700 rounded mt-1 mb-2">
            <option value="1">✅ เสร็จแล้ว</option>
            <option value="0">❌ ยังไม่เสร็จ</option>
          </select>
        </div>

        {/* ส่วนของปุ่มบันทึกงาน */}
        <button className="w-full px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded mt-5">
          แก้ไขงาน
        </button>

        {/* ส่วนของปุ่มกลับไปหน้าหลัก /showalltask */}
        <Link href="/showalltask" className=" mt-3 text-blue-500">
          กลับไปหน้าแสดงงานทั้งหมด
        </Link>
      </div>

      {/* แสดง Footer */}
      <FooterSAU />
    </>
  );
}
