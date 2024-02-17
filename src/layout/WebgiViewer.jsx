import React, {
  useRef,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WebgiViewer() {
  const canvasRef = useRef(null);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const manager = await viewer.addPlugin(AssetManagerPlugin);

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);

    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    await viewer.load("scene.glb");
  }, []);

  useEffect(() => {
    setupViewer();

    gsap.from(canvasRef.current, {
      duration: 1,
      x:-70,
      ease: 'power2.out',
    });

  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="h-[27rem] w-[50rem] rounded-xl" />
    </div>
  );
}
export default WebgiViewer;
