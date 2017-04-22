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
    }
}