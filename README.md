# MMM-Instar
Instar Security Camera Modul for MagicMirror<sup>2</sup>

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Info
Should work with common cameras of [http://www.instar.de/](http://www.instar.de)

## Installation
 1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
        module: "MMM-Instar",
        position: "bottom_left",
        config: {
            address: "192.168.178.1",
            user: "admin",
            pwd: "password",
            resolution: 8,
            rate: 0
        }
    }
    ```
## Config Options
| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `address` | REQUIRED | IP / Domain of camera.  |
| `user` | REQUIRED | to login |
| `pwd` | REQUIRED | to login |
| `resolution` | 8 | <ul><li>2: 160\*120 </li><li>8 ：320\*240 </li><li>32 ：640\*480</li></ul> |
| `rate` | 0 | 0-23  <ul><li>0: highest/fastest </li><li>1：20 fps </li><li>3：15 fps </li><li>6：10 fps </li><li>11：5 fps </li><li>12：4 fps </li><li>13：3 fps </li><li>14：2 fps </li><li>15：1 fps </li><li>17：1 fp/2s </li><li>19：1 fp/3s </li><li>21：1 fp/4s </li><li>23：1 fp/5s</li></ul> |

Information from [Instar Documentation](http://wiki.instar.de/images/c/c7/INSTAR_CGI_MJPEG_Chipset_English.pdf)
