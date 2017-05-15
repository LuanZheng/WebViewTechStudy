using AjaxStudy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace AjaxStudy.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.AppId = "1";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public JsonResult GetUserInfo(string id)
        {
            Thread.Sleep(3000);
            UserInfo userInfo = new UserInfo();
            userInfo.UserId = id;
            userInfo.UserName = "AjaxJquery";
            userInfo.Mobile = "13816656565";
            return Json(new { IsSuccess = "1", userInfo });
        }

        [HttpPost]
        public JsonResult GetPreSelectionInfo(string id)
        {
            List<UserInfo> userInfoList = new List<UserInfo>();
            UserInfo user1 = new UserInfo();
            user1.UserName = "Xiaohong";
            user1.UserId = "1";
            user1.Mobile = "13543432123";
            UserInfo user2 = new UserInfo();
            user2.UserName = "Xiaoming";
            user2.UserId = "1";
            user2.Mobile = "13543432124";
            UserInfo user3 = new UserInfo();
            user3.UserName = "Xiaozhang";
            user3.UserId = "2";
            user3.Mobile = "13543432125";
            userInfoList.Add(user1);
            userInfoList.Add(user2);
            userInfoList.Add(user3);

            List<UserInfo> returnList = new List<UserInfo>();
            foreach (UserInfo user in userInfoList)
            {
                if (user.UserId == id)
                {
                    returnList.Add(user);
                }
            }
            return Json(new { IsSuccess = "1", returnList });
        }
    }
}