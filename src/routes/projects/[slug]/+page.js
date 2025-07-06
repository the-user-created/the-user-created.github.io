import {error} from '@sveltejs/kit';

/**
 * @typedef {Object} ProjectImage
 * @property {string} src
 * @property {string} alt
 * @property {string} caption
 * @property {string} [figureClass]
 */

/**
 * @typedef {Object} ProjectTech
 * @property {string} icon
 * @property {string} name
 */

/**
 * @typedef {Object} ProjectData
 * @property {string} pageTitle
 * @property {string} title
 * @property {string | null} github
 * @property {string} overview
 * @property {string[]} objectives
 * @property {ProjectTech[]} tech
 * @property {string} otherTech
 * @property {string} details
 * @property {ProjectImage[]} [detailImages]
 * @property {string} challenges
 * @property {string} results
 * @property {ProjectImage[]} [resultImages]
 * @property {string} reportUrl
 * @property {string[]} logEntries
 */

/** @type {Record<string, ProjectData>} */
const projects = {
	fers: {
		pageTitle: 'DATA SHARD: FERS Modernization',
		title: 'Modernising the FERS Software Package',
		github: 'https://github.com/the-user-created/FERS',
		overview: `This project focused on updating the Flexible, Extensible Radar Simulator (FERS) to meet modern C++ standards (C++20/23). Originally developed in C++98/03, FERS is a vital tool in radar simulation for the Radar and Remote Sensing Group (RRSG) at UCT. The modernisation enhanced FERS's performance, readability, maintainability, and future extensibility, making it compatible with modern development environments while retaining core functionality.`,
		objectives: [
			'Upgrade the FERS codebase to incorporate C++20/23 features, improving readability, maintainability, and efficiency.',
			'Implement performance optimisations, including multithreading and improved memory management, for faster, more efficient radar simulations.',
			'Ensure backward compatibility to maintain the integrity and accuracy of simulation results.',
			'Develop and conduct thorough testing to validate the modernised software’s functionality and performance improvements.'
		],
		tech: [
			{icon: 'devicon-cplusplus-plain', name: 'C++20/23'},
			{icon: 'devicon-github-original', name: 'GitHub Actions'},
			{icon: 'devicon-clion-plain', name: 'CLion'},
			{icon: 'devicon-git-plain', name: 'Git'},
			{icon: 'devicon-linux-plain', name: 'Valgrind'}
		],
		otherTech: 'HighFive (HDF5), libxml2, Understand by SciTools, Doxygen.',
		details: `The modernisation process was approached incrementally, starting with an analysis of the FERS codebase to identify areas for improvement. Key upgrades included replacing manual memory management with smart pointers, implementing lambda expressions and C++-style casts, and applying advanced C++20/23 features like concepts, ranges, and modules. The project also involved optimising performance through multithreading and algorithmic improvements. Tools like Valgrind and perf were used for profiling and validation, while Doxygen was employed to generate inline documentation for maintainability.`,
		challenges: `The primary challenges included ensuring backward compatibility, managing the complexities introduced by modern C++ features, and mitigating the risk of introducing errors during extensive refactoring. Through a careful, incremental approach and the use of robust testing tools, these challenges were systematically addressed. Regression testing, CI with GitHub Actions, and performance profiling were key in overcoming these obstacles.`,
		results: `The modernized FERS software demonstrated improved performance, with speedups ranging from 1.46x to 3.55x across different test cases. All memory leaks were eliminated, and memory management was optimised with smart pointers. Regression testing achieved 90.5% line coverage, and function coverage reached 95.8%, ensuring high reliability.`,
		resultImages: [
			{
				src: '/assets/img/average_cpu_usage.png',
				alt: 'CPU Usage Comparison',
				caption: 'Figure 1: CPU usage for different test cases (lower is better).'
			},
			{
				src: '/assets/img/average_speedups.png',
				alt: 'Speedup Achieved',
				caption: 'Figure 2: Average speedup achieved (higher is better).'
			}
		],
		reportUrl: '/assets/pdf/modern_fers_software.pdf',
		logEntries: [
			'DATA SHARD [FERS] MOUNTED',
			'RENDERING PROJECT FILE...',
			'MEMORY_LEAK_ANALYSIS.DLL - OK',
			'MULTITHREADING_CORE.SYS - OK',
			'BACKWARD_COMPAT_LAYER - ACTIVE',
			'CPU USAGE: 78%',
			'THERMAL_STATUS: NOMINAL',
			'COMPILING PERFORMANCE METRICS...',
			'LINKING GITHUB_REPO: FERS',
			'RENDERING GRAPHS...',
			'VALIDATING REGRESSION_TESTS...',
			'RETURN_PATH: ESTABLISHED',
			'AWAITING USER INPUT...',
			'CONNECTION STABLE'
		]
	},
	yoda: {
		pageTitle: 'DATA SHARD: YODA Project',
		title: 'Comparative Analysis and Optimization of MD5 & MD6 Hashing Algorithms',
		github: 'https://github.com/the-user-created/EEE4120F-YODA',
		overview: `This project explores the performance and efficiency of MD5 and MD6 hashing algorithm implementations across different programming languages and hardware: C++, OpenCL, and Verilog. The focus is on evaluating execution time and throughput to identify the best implementation strategy for various computational contexts.`,
		objectives: [
			'Implement MD5 and MD6 hashing algorithms in C++, OpenCL, and Verilog.',
			'Evaluate execution time and throughput across all implementations.',
			'Analyze the performance trade-offs between software, parallel computing, and hardware implementations.'
		],
		tech: [
			{icon: 'devicon-cplusplus-plain', name: 'C++'},
			{icon: 'devicon-opencl-plain', name: 'OpenCL'},
			{icon: '', name: 'Verilog'},
			{icon: 'devicon-clion-plain', name: 'CLion IDE'}
		],
		otherTech: 'Hardware/Software: Xilinx Vivado Design Suite.',
		details: `The project involves implementing the MD5 and MD6 hashing algorithms in different environments to compare their performance. The MD5 algorithm, being inherently sequential, presents challenges for parallelization. However, the MD6 algorithm, designed with parallelization in mind, is evaluated for its efficiency on multicore processors and parallel computing platforms. The implementations include a sequential MD5 in C++, an OpenCL MD5 to test parallel capabilities, and a Verilog MD5 for hardware acceleration. The MD6 algorithm is implemented sequentially and in parallel using C++ to demonstrate the benefits of parallel processing.`,
		challenges: `One of the primary challenges faced was the sequential nature of the MD5 algorithm, which limited its potential for parallelization. Implementing MD5 in OpenCL highlighted performance bottlenecks, particularly in kernel execution and data transfer. Additionally, the Verilog implementation was constrained by the maximum input size it could handle, limiting its practical applicability.`,
		results: `The project successfully demonstrated the performance differences across various implementations. The parallelized C++ MD6 implementation achieved significant speedup, making it the most efficient for handling large data volumes. The Verilog MD5 implementation, though extremely fast for small inputs, was limited by its maximum input size constraint. The OpenCL MD5 implementation faced performance issues, highlighting the need for further optimization.`,
		resultImages: [
			{
				src: '/assets/img/comparison_execution_time.png',
				alt: 'Execution Time Graph',
				caption: 'Figure 2a: Comparison of Execution Time Across Implementations'
			},
			{
				src: '/assets/img/comparison_throughput.png',
				alt: 'Throughput Graph',
				caption: 'Figure 2b: Comparison of Throughput Across Implementations'
			}
		],
		reportUrl: '/assets/pdf/yoda.pdf',
		logEntries: [
			'DATA SHARD [YODA_HASH] MOUNTED',
			'RENDERING ALGORITHM ANALYSIS...',
			'MD5_SEQUENTIAL.DLL - LOADED',
			'MD6_PARALLEL.DLL - OPTIMAL',
			'OPENCL_KERNEL - WARNING: BOTTLENECK',
			'VERILOG_FPGA - HIGH SPEED, LOW CAPACITY',
			'SYSTEM_THRUPUT: 3.1 GB/S',
			'ANALYZING EXECUTION TIMES...',
			'LINKING VIVADO_SUITE_LOGS...',
			'RENDERING COMPARISON_GRAPHS...',
			'VALIDATING HASH_INTEGRITY...',
			'RETURN_PATH: ESTABLISHED',
			'AWAITING USER INPUT...',
			'CONNECTION STABLE'
		]
	},
	stm_data_sharc: {
		pageTitle: 'DATA SHARD: ARM Encryption/Compression',
		title: 'Encryption and Compression on Resource-Constrained Embedded ARM MCs',
		github: 'https://github.com/the-user-created/EEE3097S-Project',
		overview:
			'This project focuses on implementing data compression and encryption on the STM32F051 Discovery Board for secure and efficient data transmission from sensors in Antarctic buoys. The primary goal is to reduce transmission costs and ensure data security over the Iridium satellite network.',
		objectives: [
			'Design and implement efficient data compression and encryption algorithms on the STM32F051 Discovery Board.',
			'Ensure data integrity and security during transmission over the Iridium satellite network.',
			'Validate system performance using simulated and real sensor data.'
		],
		tech: [
			{icon: 'devicon-c-plain', name: 'C Programming'},
			{icon: 'devicon-python-plain', name: 'Python'},
			{icon: '', name: 'STM32 MCU'},
			{icon: '', name: 'Iridium Comms'}
		],
		otherTech: 'Algorithms: LZSS (Compression), Blowfish (Encryption), CRC-32 (Integrity).',
		details:
			"The project involves designing subsystems for data retrieval, compression, encryption, and transmission. The data collected from the IMU (Inertial Measurement Unit) is first processed to extract Fourier coefficients. The LZSS algorithm is used for data compression, and the Blowfish algorithm is employed for encryption. The system ensures that at least 25% of the lower Fourier coefficients are preserved, meeting the client's requirements. A CRC-32 checksum is used to verify data integrity before and after transmission.",
		detailImages: [
			{
				src: '/assets/img/sys_op_diag.png',
				alt: 'System Operation Diagram',
				caption: 'Figure 1: System Operation Diagram',
				figureClass: 'image-inverted-colors'
			}
		],
		challenges:
			'One major challenge was the limited memory and computational power of the STM32F051 Discovery Board, which restricted the choice of algorithms. Implementing the algorithms in C, rather than Python, presented difficulties due to differences in processor architecture. Another challenge was ensuring that the compression and encryption processes were efficient enough to meet the specified time constraints.',
		results:
			'The project successfully implemented data compression and encryption on the STM32F051 Discovery Board, meeting most of the specified acceptance test procedures. The system achieved an average compression ratio of 1.812 and encryption speed of 910.219 bytes/second. However, the compression and encryption times slightly exceeded the initially specified limits, leading to revised specifications.',
		resultImages: [
			{
				src: '/assets/img/compress-speed.png',
				alt: 'Compression Speed Graph',
				caption: 'Figure 2a: Compression Speed Graph'
			},
			{
				src: '/assets/img/encrypt-speed.png',
				alt: 'Encryption Speed Graph',
				caption: 'Figure 2b: Encryption Speed Graph'
			}
		],
		reportUrl: '/assets/pdf/arm_sharc_comms.pdf',
		logEntries: [
			'DATA SHARD [STM_SHARC] MOUNTED',
			'RENDERING EMBEDDED SYS_DATA...',
			'BLOWFISH_ENCRYPTION.DLL - OK',
			'LZSS_COMPRESSION.SYS - OK',
			'CRC-32 INTEGRITY CHECK - ACTIVE',
			'IRIDIUM SATELLITE UPLINK: STABLE',
			'MCU LOAD: 89%',
			'COMPILING PERFORMANCE METRICS...',
			'LINKING HARDWARE_SPECS: STM32F051',
			'RENDERING TEST GRAPHS...',
			'VALIDATING ATPs...',
			'RETURN_PATH: ESTABLISHED',
			'AWAITING USER INPUT...',
			'CONNECTION STABLE'
		]
	},
	enviro_sense: {
		pageTitle: 'DATA SHARD: Enviro-Sense',
		title: 'Enviro-Sense: Environmental Monitoring for Raptor Nesting Sites',
		github: null, // This project does not have a GitHub link
		overview:
			'The Enviro-Sense project focuses on designing and implementing a wireless sensor network (WSN) to monitor environmental conditions at raptor nesting sites in the wild. The system aims to gather accurate data on temperature and humidity, aiding in the conservation and study of these birds.',
		objectives: [
			'Develop a cost-effective and reliable environmental monitoring system.',
			'Ensure seamless wireless data transmission from remote sensor nodes.',
			'Implement power-efficient strategies to maximize battery life for long-term deployment.'
		],
		tech: [
			{icon: 'devicon-raspberrypi-plain', name: 'Raspberry Pi'},
			{icon: 'devicon-arduino-plain', name: 'Arduino IDE'},
			{icon: 'devicon-cplusplus-plain', name: 'C++'}
		],
		otherTech: 'Hardware: ESP32-PICO-D4, DHT11 Sensor, DS3231 Real-Time Clock.',
		details:
			'The project used the ESP32-PICO-D4 microcontroller for its compact size and built-in Wi-Fi capabilities, allowing for seamless data transmission. The DHT11 sensor was chosen for its affordability and sufficient accuracy for temperature and humidity measurements. The DS3231 RTC ensured accurate timestamping of data. Firmware was developed in Arduino IDE to manage data acquisition, validation, and low-power modes, optimizing battery life. The prototype was designed to collect data every second and transmit it via a wireless connection to a rendezvous node, where it could be further processed and analyzed.',
		detailImages: [
			{
				src: '/assets/img/CommSystem.png',
				alt: 'Communication Design',
				caption: 'Figure 1: Prototype Communication and User Interface Design'
			}
		],
		challenges:
			"One of the main challenges was selecting components that balanced cost with performance. The ESP32-PICO-D4 and DHT11 sensor met the project's budget constraints while still providing reliable data. Another challenge was ensuring data accuracy and integrity, which was addressed through data validation techniques like range checking. Power management was critical, achieved through the microcontroller's low-power sleep mode and the RTC's wake-up triggers.",
		results:
			"The prototype successfully gathered and transmitted accurate temperature and humidity data from sensor nodes to a rendezvous node. The system proved to be cost-effective, with a stable wireless connection and efficient power management, capable of real-time monitoring and data collection. Testing confirmed the system's ability to meet the specified requirements, providing a solid foundation for future development and deployment.",
		reportUrl: '/assets/pdf/enviro-sense.pdf',
		logEntries: [
			'DATA SHARD [ENVIRO_SENSE] MOUNTED',
			'RENDERING PROJECT FILE...',
			'SENSOR_NETWORK.DLL - OK',
			'ESP32_FIRMWARE.HEX - LOADED',
			'POWER_MANAGEMENT - ACTIVE',
			'SIGNAL STRENGTH: 92%',
			'THERMAL_STATUS: 24.7°C',
			'COMPILING FIELD DATA...',
			'LINKING HARDWARE_SPECS...',
			'RENDERING DIAGRAMS...',
			'VALIDATING DATA_ACCURACY...',
			'RETURN_PATH: ESTABLISHED',
			'AWAITING USER INPUT...',
			'CONNECTION STABLE'
		]
	}
};

/**
 * @type {import('./$types').PageLoad}
 */
export const load = ({params}) => {
	const project = projects[params.slug];

	if (!project) {
		error(404, 'Project not found');
	}

	return {
		project
	};
};

/**
 * Pre-renders all project pages for a static site.
 * @type {import('./$types').EntryGenerator}
 */
export const entries = () => {
	// Add slugs for all your projects here
	return [{slug: 'fers'}, {slug: 'yoda'}, {slug: 'stm_data_sharc'}, {slug: 'enviro_sense'}];
};

export const prerender = true;
