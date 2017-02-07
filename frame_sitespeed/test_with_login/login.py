import pytest
import settings
from selenium import webdriver
from selenium.webdriver.chrome.options import DesiredCapabilities



@pytest.yield_fixture(scope='function')
def driver():
    _driver = None
    if settings.DRIVER == DesiredCapabilities.CHROME['browserName']:
        _driver = webdriver.Remote(command_executor=settings.HUB_URL,
                                   desired_capabilities=DesiredCapabilities.CHROME)
    elif settings.DRIVER == DesiredCapabilities.FIREFOX['browserName']:
        _driver = webdriver.Remote(command_executor=settings.HUB_URL,
                                   desired_capabilities=DesiredCapabilities.FIREFOX)
    width, height = settings.WINDOW_SIZE.split('x')
    _driver.set_window_size(width, height)
    _driver.implicitly_wait(settings.TIMEOUT)
    _driver.maximize_window()
    yield _driver
    _driver.quit()